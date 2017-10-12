Rails.application.routes.draw do
	post '/signup', to: 'users#create'
	post '/login', to: 'auth#create'
	get '/users/:id', to: 'users#show'
  get '/', to: 'application#welcome'

  post '/trips/new', to: 'trips#create'
  get '/trips/:id', to: 'trips#show'
  get '/trips', to: 'trips#index'
end
