class Api::V1::GroupsController < ApplicationController

  def index
    groups = Group.all

    render json: GroupSerializer.new(groups).to_serialized_json
  end

end
