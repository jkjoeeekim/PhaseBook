json.extract! user, :id, :first_name, :last_name, :email
json.set! posts do
  json.array! posts do |post|
    json.body post.body
    json.author_id post.author_id
    json.post_id post.post_id
    json.user_id post.user_id
    json.picture_id post.picture_id
  end
end
json.friends friends