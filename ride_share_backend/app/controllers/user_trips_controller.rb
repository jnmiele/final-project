class UserTripsController < ApplicationController

	def create
		byebug
		@u = UserTrip.new(
			user_id: params[:user_id],
			trip_id: params[:trip],
			role: "Passenger"
		)
		if @u.save
			render json: {@u}
		else
    	render json: { message: "Error"}
  	end
	end
	
end