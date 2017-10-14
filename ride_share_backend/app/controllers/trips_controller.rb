class TripsController < ApplicationController
	skip_before_action :authorized, only: [:show]

	def create
		@trip = Trip.create(trip_params)
    @user = User.find(params[:user][:user_id])
    UserTrip.create(user: @user, trip: @trip, role: "Driver")
    render json: @trip
	end

	def show
		@trip = Trip.find(params[:id])
		render json: @trip
	end

	def index
		@trips = Trip.all
		render json: @trips
	end

	private

	def trip_params
		params.require(:trip).permit(:destination, :origin, :date, :time)
	end

end