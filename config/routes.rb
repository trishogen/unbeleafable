Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/signup', to: 'users#create'
      post '/login', to: 'session#create'

      resources :groups, only: [:index, :show, :create, :update, :destroy] do
        resources :comments, only: [:create]
      end

    end
  end

end
