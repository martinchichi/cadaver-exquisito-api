export const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ errorMsg: 'Internal server error' });
};