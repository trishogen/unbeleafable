Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/signup', to: 'users#create'
      post '/login', to: 'auth#create'

      resources :groups, only: [:index, :create, :destroy]
    end
  end

end
