<?php

/**
 *
 */

namespace SychO\PackageManager\Api\Controller;

use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use SychO\PackageManager\Command\CheckForUpdates;

class CheckForUpdatesController implements RequestHandlerInterface
{
    /**
     * @var Dispatcher
     */
    protected $bus;

    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        $lastUpdateCheck = $this->bus->dispatch(
            new CheckForUpdates($actor)
        );

        return new JsonResponse($lastUpdateCheck);
    }
}