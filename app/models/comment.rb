class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :text, presence: true


  def posted_by
    self.user.username
  end

  def posted_at
    self.created_at.strftime("%m/%d/%Y at %I:%M%p")
  end

end
