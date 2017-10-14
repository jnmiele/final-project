Rails.application.routes.draw do
	post '/login', to: 'auth#create'
  get '/', to: 'application#welcome'

	post '/signup', to: 'users#create'
	get '/users/:id', to: 'users#show'

  post '/trips/new', to: 'trips#create'
  get '/trips/:id', to: 'trips#show'
  get '/trips', to: 'trips#index'

  post '/usertrips/create', to: 'user_trips#create'
end
