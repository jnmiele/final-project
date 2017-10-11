Rails.application.routes.draw do
	post '/signup', to: 'user#create'
	post '/login', to: 'auth#create'
	get '/users/:id', to: 'user#show'
  get '/', to: 'application#welcome'
end
