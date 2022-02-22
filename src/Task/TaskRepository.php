<?php

namespace Flarum\PackageManager\Task;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class TaskRepository
{
    /**
     * @return Builder
     */
    public function query()
    {
        return \Flarum\PackageManager\Task\Task::query();
    }

    /**
     * @param int $id
     * @param User $actor
     * @return Task
     */
    public function findOrFail($id, User $actor = null): Task
    {
        return \Flarum\PackageManager\Task\Task::findOrFail($id);
    }
}
