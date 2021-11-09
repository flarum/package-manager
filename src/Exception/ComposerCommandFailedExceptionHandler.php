<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\PackageManager\Exception;

use Flarum\Foundation\ErrorHandling\HandledError;

class ComposerCommandFailedExceptionHandler
{
    public function handle(ComposerCommandFailedException $e): HandledError
    {
        return (new HandledError(
            $e,
            'composer_command_failure',
            409
        ))->withDetails($this->errorDetails($e));
    }

    protected function errorDetails(ComposerCommandFailedException $e): array
    {
        $details = [
            'output' => $e->getMessage(),
        ];

        if ($guessedCause = $this->guessCause($e)) {
            $details['guessed_cause'] = $guessedCause;
        }

        return [$details];
    }

    protected function guessCause(ComposerCommandFailedException $e): ?string
    {
        return $e->guessCause();
    }
}
