<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\PackageManager\Listener;

use Composer\Command\ClearCacheCommand;
use Flarum\Bus\Dispatcher;
use Flarum\Database\Console\MigrateCommand;
use Flarum\Foundation\Console\AssetsPublishCommand;
use Flarum\PackageManager\Command\CheckForUpdates;
use Flarum\PackageManager\Event\FlarumUpdated;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\NullOutput;

class FlarumUpdateListener
{
    /**
     * @var ClearCacheCommand
     */
    private $clearCache;

    /**
     * @var AssetsPublishCommand
     */
    private $publishAssets;

    /**
     * @var MigrateCommand
     */
    private $migrate;

    /**
     * @var Dispatcher
     */
    private $bus;

    /**
     * @param ClearCacheCommand $clearCache
     * @param AssetsPublishCommand $publishAssets
     * @param MigrateCommand $migrate
     * @param Dispatcher $bus
     */
    public function __construct(ClearCacheCommand $clearCache, AssetsPublishCommand $publishAssets, MigrateCommand $migrate, Dispatcher $bus)
    {
        $this->clearCache = $clearCache;
        $this->publishAssets = $publishAssets;
        $this->migrate = $migrate;
        $this->bus = $bus;
    }

    /**
     * @throws \Exception
     */
    public function handle(FlarumUpdated $event)
    {
        $this->clearCache->run(new ArrayInput([]), new NullOutput());
        $this->migrate->run(new ArrayInput([]), new NullOutput());
        $this->publishAssets->run(new ArrayInput([]), new NullOutput());

        $this->bus->dispatch(
            new CheckForUpdates($event->actor)
        );
    }
}