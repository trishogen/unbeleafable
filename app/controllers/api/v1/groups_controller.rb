class Api::V1::GroupsController < ApplicationController

  def index
    groups = Group.all

    render json: GroupSerializer.new(groups).to_serialized_json
  end

  def create
    group = current_user.groups.build(group_params)

    if group.save
      render json: GroupSerializer.new(group).to_serialized_json
    else
      render json: { error: group.errors.full_messages[0] }, status: :not_acceptable
    end

  end

  private

  def group_params
    params.require(:group).permit(:name, :description)
  end
end
