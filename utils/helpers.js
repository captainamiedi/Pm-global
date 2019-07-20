
export const responseMsg = (res, status, message, data) => res.status(status).json({
    status,
    message,
    data,
});
