class UserTripsController < ApplicationController

	def create
		@u = UserTrip.find_or_create_by(
			user_id: params[:user_id],
			trip_id: params[:trip],
			role: "Passenger"
		)
		if @u.save
			render json: {
				user: {
					id: @u.user.id,
					email: @u.user.email,
					name: @u.user.name
					},
				trip: {
					id: @u.trip.id,
					origin: @u.trip.origin,
					destination: @u.trip.destination
				},
				UserTrip: @u
			}
		else
    	render json: { message: "Error"}
  	end
	end

	def index
		@user_trips = UserTrip.all
		render json: @user_trips
	end
	
end