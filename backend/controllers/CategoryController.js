import Category from "../models/CategoryModel.js";
import { categoryValidation } from "../utils/validations/CategoryValidation.js";

// @desc Create Or update a category
// @route Post api/category/:id
// @access Private admin/author
const createOrUpdateCategory = async (req, res) => {
  const { valid, errors } = categoryValidation(req.body);

  if (!valid) return res.status(400).json(errors);

  const { nameAR, nameKR } = req.body;

  try {
    const data =
      (await Category.findOne({ _id: req.params.id })) || new Category({});

    data.nameAR = nameAR;
    data.nameKR = nameKR;

    const result = await data.save();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ general: "Server Error" });
  }
};

export { createOrUpdateCategory };