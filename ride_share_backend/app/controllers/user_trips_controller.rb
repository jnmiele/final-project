class UserTripsController < ApplicationController

	def create
		token = decoded_token # => [{"user_id"=> int}, {"alg"=>"HS256"}]
		
		@u = UserTrip.find_or_create_by(
			user_id: token[0]['user_id'],
			trip_id: params[:trip],
			role: 'Passenger'
		)

		if @u.save
			render json: @u
		else
    	render json: { message: 'Error'}
  	end
	end

	def index
		@user_trips = UserTrip.includes(:trip).includes(:user).all
		render json: @user_trips
	end

	def show
		@ut = UserTrip.find(params[:id])
		render json: @ut
	end

	def update
		@ut = UserTrip.find(params[:id])
		@ut.confirmed = true
		@ut.save
		render json: @ut
	end

	def destroy
		UserTrip.find(params[:id]).destroy
		render json: { message: 'UserTrip was deleted.'}
	end
	
end