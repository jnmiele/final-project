class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      token = encode_token({ user_id: @user.id})
      @ut = UserTrip.find{|ut| ut.user_id == @user.id}
      render json: { 
        user: {
          id: @user.id,
          email: @user.email,
          name: @user.name,
          userTrips: @ut
        }, 
        jwt: token
      }
     elsif !@user
     	render json: { message: "Error: That user does not exist."}
     elsif !@user.authenticate(params[:password])
      render json: { message: "Error: The username and password do not match."}
    end
  end

end