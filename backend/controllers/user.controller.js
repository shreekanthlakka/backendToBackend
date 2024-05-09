import { asyncHandler } from "../utils/asyncHandler.js";

const getUserDetails = asyncHandler(async (req, res) => {
    const { uid } = req.query;

    res.status(200).json({
        success: true,
        data: {
            uid,
        },
    });
});

export { getUserDetails };
