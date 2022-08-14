Rails.application.routes.draw do
  resources :items, only: [:show, :index, :create]
  resources :reviews
  resources :meals
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end