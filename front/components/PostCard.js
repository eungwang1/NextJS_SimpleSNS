import React, { useCallback, useState } from "react";
import Proptypes from "prop-types";
import { Card, Popover, Button, Avatar, List, Comment } from "antd";
import {
  EllipsisOutlined,
  MessageOutlined,
  HeartOutlined,
  RetweetOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import PostImages from "./PostImages";
import { useSelector } from "react-redux";
import CommentForm from "./CommentForm";

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked(!liked);
  }, [liked]);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened(!commentFormOpened);
  }, [commentFormOpened]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone twoToneColor="#eb3f96" key="heart" onClick={onToggleLike} />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.Images}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: Proptypes.shape({
    id: Proptypes.number,
    User: Proptypes.object,
    content: Proptypes.string,
    createdAt: Proptypes.object,
    Comments: Proptypes.arrayOf(Proptypes.object),
    Images: Proptypes.arrayOf(Proptypes.object),
  }).isRequired,
};

export default PostCard;
