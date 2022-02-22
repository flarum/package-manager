<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\PackageManager\Composer;

use Composer\Console\Application;
use Flarum\PackageManager\OutputLogger;
use Flarum\PackageManager\Task\Task;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\BufferedOutput;

/**
 * @internal
 */
class ComposerAdapter
{
    /**
     * @var Application
     */
    private $application;

    /**
     * @var OutputLogger
     */
    private $logger;

    /**
     * @var BufferedOutput
     */
    private $output;

    public function __construct(Application $application, OutputLogger $logger)
    {
        $this->application = $application;
        $this->logger = $logger;
        $this->output = new BufferedOutput();
    }

    public function run(InputInterface $input, ?Task $task = null): ComposerOutput
    {
        $this->application->resetComposer();

        $exitCode = $this->application->run($input, $this->output);

        $command = $input->__toString();
        $output = $this->output->fetch();

        if ($task) {
            $task->update(compact('command', 'output'));
        } else {
            $this->logger->log($command, $output, $exitCode);
        }

        return new ComposerOutput($exitCode, $output);
    }
}
