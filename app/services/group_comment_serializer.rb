class GroupCommentSerializer

  def initialize(group_object)
    @group = group_object
  end

  def to_serialized_json
    options = {
      :include => {
        :comments => {
          methods: [:posted_by, :posted_at],
          except: [:updated_at, :created_at]
        },
      },
      :user => {:only => [:id]},
      except: [:updated_at, :created_at]
    }
    @group.to_json(options)
  end

end
