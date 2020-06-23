class Api::V1::GroupsController < ApplicationController

  def index
    groups = Group.all

    render json: GroupSerializer.new(groups).to_serialized_json
  end

  def create
    group = current_user.groups.build(group_params)

    if group.save
      render json: GroupSerializer.new(group).to_serialized_json, status: :created
    else
      render json: { error: group.errors.full_messages[0] }, status: :not_acceptable
    end
  end

  def destroy
    group = Group.find(params[:id])
    
    if current_user == group.user
      group.destroy
      render json: {}, status: :no_content
    else
      render json: { error: 'Unauthorized to delete this group' }, status: :unauthorized
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, :description)
  end
end
