class Api::V1::CommentsController < ApplicationController

  def create
    group = Group.find(params[:group_id])

    if group
      comment = group.comments.build(comment_params)
      comment.user = current_user

      if group.save
        render json: GroupCommentSerializer.new(group).to_serialized_json, status: :ok
      else
        render json: { error: comment.errors.full_messages[0] }, status: :not_acceptable
      end

    else
      render json: { error: "Can't find the group to comment on" }, status: :not_found
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end

end
