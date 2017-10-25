class TripsController < ApplicationController
	skip_before_action :authorized, only: [:show]

	def create
		token = decoded_token # => [{"user_id"=> int}, {"alg"=>"HS256"}]
		@trip = Trip.create(trip_params)
    @user = User.find(token[0]['user_id'])
    UserTrip.create(user: @user, trip: @trip, role: "Driver", confirmed: true)
    render json: @trip
	end

	def show
		@trip = Trip.find(params[:id])
		render json: @trip
	end

	def index
		@trips = Trip.includes(:users).includes(:user_trips).all
		render json: @trips
	end

	def update
		token = decoded_token
		@t = Trip.find(params[:id])
		@t.completed = !@t.completed
		@t.save
		@user = User.find(token[0]['user_id'])
		render json: @user
	end

	def destroy
		@trip = Trip.find(params[:id])
		@trip.user_trips.each{|ut| ut.destroy}
		@trip.destroy
		render json: {message: 'trip and associated userTrips deleted'}
	end

	private

	def trip_params
		params.require(:trip).permit(:destination, :origin, :date, :time)
	end

end