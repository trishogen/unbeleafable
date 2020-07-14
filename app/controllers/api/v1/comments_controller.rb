class Api::V1::CommentsController < ApplicationController

  def create
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end

end
