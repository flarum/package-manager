<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\PackageManager\Command;

use Flarum\PackageManager\Task\Task;
use Flarum\User\User;

class RemoveExtension implements BusinessCommandInterface
{
    /**
     * @var Task
     */
    public $task = null;

    /**
     * @var User
     */
    public $actor;

    /**
     * @var string
     */
    public $extensionId;

    public function __construct(User $actor, string $extensionId)
    {
        $this->actor = $actor;
        // @TODO the queue looks for a package property
        $this->extensionId = $extensionId;
    }

    public function getOperationName(): string
    {
        return Task::EXTENSION_REMOVE;
    }
}
