Rails.application.routes.draw do
	post '/login', to: 'auth#create'
  get '/', to: 'application#welcome'

	post '/signup', to: 'users#create'
	get '/users/:id', to: 'users#show'
  get '/me', to: 'users#me'
	
  post '/trips/new', to: 'trips#create'
  get '/trips/:id', to: 'trips#show'
  patch '/trips/:id/edit', to: 'trips#update'
  get '/trips', to: 'trips#index'
  delete '/trips/:id', to: 'trips#destroy'

  post '/usertrips/create', to: 'user_trips#create'
  get '/usertrips/:id', to: 'user_trips#show'
  patch '/usertrips/:id/edit', to: 'user_trips#update'
  get '/usertrips', to: 'user_trips#index'
  delete '/usertrips/:id', to: 'user_trips#destroy'
end
