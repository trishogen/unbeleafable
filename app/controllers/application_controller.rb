class ApplicationController < ActionController::API
  before_action :authorized # checks that users are authorized before any action

  def encode_token(payload)
    # set jwt passwordin .env file
    JWT.encode(payload, ENV['jwt_password'])
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token(token)
    if auth_header
      # parse the token from the auth header ({ 'Authorization': 'Bearer <token>' })
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, ENV['jwt_password'], true, algorithm: 'HS256')
      rescue JWT::DecodeError
        # prevent app from crashing when it gets a bad token
        nil
      end
    end
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end

end
