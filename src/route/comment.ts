import { Router } from 'express';
import { catchAsync } from './utilities';
import {
  getAllCommentsByticketId,
  getCommentById,
  updateComment,
  createComment,
  deleteComment
} from '../controller/comment';
import { requireAuth } from '../middleware/jwtAuth';

const commentRouter = Router();

commentRouter.all('/comment', catchAsync(requireAuth));

commentRouter.get('/comment/ticketId/:ticketId', catchAsync(getAllCommentsByticketId));

commentRouter.get('/comment/id/:commentId', catchAsync(getCommentById));

commentRouter.post('/comment/create', catchAsync(createComment));

commentRouter.patch('/comment/edit/:commentId', catchAsync(updateComment));

commentRouter.delete('/comment/delete/:commentId', catchAsync(deleteComment));

export default commentRouter;
