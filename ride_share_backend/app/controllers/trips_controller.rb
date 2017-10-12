class TripsController < ApplicationController
	skip_before_action :authorized, only: [:show]

	def create
		@trip = Trip.new(trip_params)
    @user = User.find(params[:user][:user_id])
    @trip.user = @user
    @trip.save
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
		params.require(:trip).permit(:destination, :origin)
	end

end