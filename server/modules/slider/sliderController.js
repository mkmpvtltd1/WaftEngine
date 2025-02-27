const httpStatus = require('http-status');
const objectId = require('mongoose').Types.ObjectId;
const otherHelper = require('../../helper/others.helper');
const sliderSch = require('./sliderSchema');
const sliderConfig = require('./sliderConfig');
const sliderController = {};

sliderController.GetSlider = async (req, res, next) => {
  try {
    const size_default = 10;
    let page;
    let size;
    let sortq;
    let searchq;
    let populate;
    let selectq;
    if (req.query.page && !isNaN(req.query.page) && req.query.page != 0) {
      page = Math.abs(req.query.page);
    } else {
      page = 1;
    }
    if (req.query.size && !isNaN(req.query.size) && req.query.size != 0) {
      size = Math.abs(req.query.size);
    } else {
      size = size_default;
    }
    if (req.query.sort) {
      let sortfield = req.query.sort.slice(1);
      let sortby = req.query.sort.charAt(0);
      if (sortby == 1 && !isNaN(sortby) && sortfield) {
        //one is ascending
        sortq = sortfield;
      } else if (sortby == 0 && !isNaN(sortby) && sortfield) {
        //zero is descending
        sortq = '-' + sortfield;
      } else {
        sortq = '';
      }
    }
    populate = [
      {
        path: 'images.image',
        select: '_id path mimetype filename size',
      },
    ];

    selectq = 'slider_name slider_key images settings added_by added_at';

    searchq = {
      is_deleted: false,
    };

    if (req.query.find_slider_name) {
      searchq = {
        slider_name: {
          $regex: req.query.find_slider_name,
          $options: 'i',
        },
        ...searchq,
      };
    }
    if (req.query.find_slider_key) {
      searchq = {
        slider_key: {
          $regex: req.query.find_slider_key,
          $options: 'i',
        },
        ...searchq,
      };
    }
    let sliders = await otherHelper.getquerySendResponse(sliderSch, page, size, sortq, searchq, selectq, next, populate);
    return otherHelper.paginationSendResponse(res, httpStatus.OK, true, sliders.data, sliderConfig.get, page, size, sliders.totaldata);
  } catch (err) {
    next(err);
  }
};
sliderController.SaveSlider = async (req, res, next) => {
  try {
    const slider = req.body;
    let d = new Date();
    slider.slug_url = otherHelper.slugify(`${d.getFullYear()} ${d.getMonth() + 1} ${d.getDate()} ${slider.slider_key}`);
    if (slider && slider._id) {
      const update = await sliderSch.findByIdAndUpdate(slider._id, {
        $set: slider,
      });
      return otherHelper.sendResponse(res, httpStatus.OK, true, update, null, sliderConfig.save, null);
    } else {
      slider.added_by = req.user.id;
      const newSlider = new sliderSch(slider);
      const slidersave = await newSlider.save();
      return otherHelper.sendResponse(res, httpStatus.OK, true, slidersave, null, sliderConfig.save, null);
    }
  } catch (err) {
    next(err);
  }
};
sliderController.GetSliderById = async (req, res, next) => {
  try {
    const id = req.params.id;
    let populate = [
      {
        path: 'images.image',
        select: '_id path mimetype filename size',
      },
    ];
    const slider = await sliderSch
      .findOne({
        _id: id,
        is_deleted: false,
      })
      .populate(populate);
    return otherHelper.sendResponse(res, httpStatus.OK, true, slider, null, sliderConfig.get, null);
  } catch (err) {
    next(err);
  }
};
sliderController.GetSliderByKey = async (req, res, next) => {
  const id = req.params.key;
  const slider = await sliderSch.findOne({
    slider_key: id,
    is_deleted: false,
  });
  return otherHelper.sendResponse(res, httpStatus.OK, true, slider, null, sliderConfig.get, null);
};
sliderController.DeleteSlider = async (req, res, next) => {
  const id = req.params.id;
  const sliderDel = await sliderSch.findByIdAndUpdate(id, {
    $set: {
      is_deleted: true,
      deleted_at: Date.now,
    },
  });
  return otherHelper.sendResponse(res, httpStatus.OK, true, sliderDel, null, sliderConfig.delete, null);
};
module.exports = sliderController;
