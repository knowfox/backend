<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use Knowfox\Crud\Models\Setting;
use Knowfox\Crud\Models\ConfigSetting;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Setting::class, ConfigSetting::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
