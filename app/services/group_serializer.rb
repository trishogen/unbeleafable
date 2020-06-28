class GroupSerializer

  def initialize(group_object)
    @group = group_object
  end

  def to_serialized_json
    options = {
      :group => {except: [:updated_at, :created_at]},
      :user => {:only => [:id]},
    }
    @group.to_json(options)
  end

end
