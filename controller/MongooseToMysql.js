import { VehicleInformationTable } from "../Model/MySqlModel/vehicleInformation.js";
import mongoose from "mongoose";
import Cataroies from "../Model/categories.js";
import Brands from "../Model/Brands.js";
import vehicle_information from "../Model/VehicleInformation.js";
import { ModelColorTable } from "../Model/MySqlModel/modelColor.js";
import { PriceVariantTable } from "../Model/MySqlModel/priceVariant.js";
import { VariantkeySpec } from "../Model/MySqlModel/variantKeySpec.js";
import { VariantSpecificationsTable } from "../Model/MySqlModel/variantSpecifications.js";
import { CategoriesTable } from "../Model/MySqlModel/categories.js";
import VariantSpecification from "../Model/VariantSpecification.js";
import { where } from "sequelize";
import Categories from "../Model/categories.js";
import { BrandTable } from "../Model/MySqlModel/brands.js";
import { ModelBodyTypeTable } from "../Model/MySqlModel/bodytypes.js";
import bodytypes from "../Model/BodyType.js";
import { KeyspecificationTable } from "../Model/MySqlModel/keyspecification.js";
import keyspecification from "../Model/keyspecification.js";


export const MysqlToMongodbConvertDatabaseCategory = async (req, res) => {
    const getData = await CategoriesTable.findAll({})
    for (const item of getData) {
        const findCatagory = await Categories.findOne({ category_name: item.category_name })
        if (!findCatagory) {
            await Categories.create({
                php_id: item.id,
                category_name: item.category_name,
                status: item.status,
                thumb_image: item.thumb_image,
                created_at: item.created_at,
                updated_at: item.updated_at,
                deleted_at: item.deleted_at,
                deleted_by: item.deleted_by
            })
        }
    }
    res.json("Catagory Addedd!!")
}
export const MysqlToMongodbConvertDatabaseBrand = async (req, res) => {
    const GetData = await BrandTable.findAll({})

    for (const item of GetData) {
        const findCatagory = await Brands.findOne({ name: item.name })

        if (!findCatagory) {
            let category_id = await Cataroies.findOne({ php_id: item.category_id })
            category_id = category_id._id
            console.log(category_id)
            await Brands.create({
                php_id: item.id,
                category_id: category_id,
                php_category_id: item.category_id,
                name: item.name,
                title: item.title,
                headtag: item.headtag,
                test_drive_link: item.test_drive_link,
                is_popular: item.is_popular,
                logo: item.logo,
                created_at: item.created_at,
                updated_at: item.updated_at,
                deleted_at: item.deleted_at,
                deleted_by: item.deleted_by,
            })
        }
    }
    res.json("BrandTable Addedd!!")
}
export const MysqlToMongodbConvertDatabaseBodyType = async (req, res) => {
    const GetData = await ModelBodyTypeTable.findAll({})

    for (const item of GetData) {
        const findCatagory = await bodytypes.findOne({ name: item.name, category_id: new mongoose.Types.ObjectId(item.category_id) })
        if (!findCatagory) {
            let category_id = await Cataroies.findOne({ php_id: item.category_id })
            category_id = category_id._id

            await bodytypes.create({
                php_id: item.id,
                category_id: category_id,
                php_category_id: item.category_id,
                name: item.name,
                image: item.image,
                status: item.status,
                position: item.position,
                created_at: item.created_at,
                updated_at: item.updated_at,
                deleted_at: item.deleted_at,
                deleted_by: item.deleted_by,
            })
        }
    }
    res.json("BodyType Addedd!!")
}
export const MysqlToMongodbConvertDatabaseKeyspecification = async (req, res) => {

    const GetData = await KeyspecificationTable.findAll({})
    for (const item of GetData) {
        const findkeyspec = await keyspecification.findOne({ name: item.name })
        if (!findkeyspec) {
            await keyspecification.create({
                php_id: item.id,
                name: item.name,
                icon: item.icon,
                created_at: item.created_at,
                updated_at: item.updated_at,
                deleted_at: item.deleted_at,
                deleted_by: item.deleted_by,
            })
        }
    }
    res.json("Keyspecification Addedd!!")
}
export const MysqlToMongodbConvertDatabaseVehicleInformation = async (req, res) => {

    const GetData = await VehicleInformationTable.findAll({})
    for (const item of GetData) {
        const findkeyspec = await vehicle_information.findOne({ id: item.php_id })
        if (!findkeyspec) {
            const brand_id = await Brands.findOne({ id: item })
            await vehicle_information.create({
                php_id: item.id,
                brand_id: item.brand_id,
                category_id: item.category_id,
                bodytype_id: item.bodytype_id,
                bind_id: item.bind_id,
                model_name: item.model_name,
                fuel_type: item.fuel_type,
                avg_rating: item.avg_rating,
                review_count: item.review_count,
                variant_name: item.variant_name,
                min_price: item.min_price,
                max_price: item.max_price,
                price_range: item.price_range,
                search_count: item.search_count,
                popular_count: item.popular_count,
                image: item.image,
                status: item.status,
                launched_at: item.launched_at,
                Launch_date: item.Launch_date,
                model_popularity: item.model_popularity,
                mileage: item.mileage,
                engine: item.engine,
                style_type: item.style_type,
                max_power: item.max_power,
                showroom_price: item.showroom_price,
                rto_price: item.rto_price,
                insurance_price: item.insurance_price,
                other_price: item.other_price,
                is_content_writer: item.is_content_writer,
                is_designer: item.is_designer,
                on_road_price: item.on_road_price,
                is_popular_search: item.is_popular_search,
                is_upcoming: item.is_upcoming,
                is_latest: item.is_latest,
                price_desc: item.price_desc,
                highlights_desc: item.highlights_desc,
                key_specs: item.key_specs,
                manufacturer_desc: item.manufacturer_desc,
                is_recommended: item.is_recommended,
                link: item.link,
                headtag: item.headtag,
                created_at: item.created_at,
                updated_at: item.updated_at,
                deleted_at: item.deleted_at,
                deleted_by: item.deleted_by,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt,
            })
        }
    }
    res.json("Keyspecification Addedd!!")
}



export const MysqltoMongodbConver = async (req, res) => {
    try {
        const postData = await vehicle_information.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(req.body.vehicleId) } },
            {
                $lookup: {
                    from: 'brands',
                    localField: 'brand_id',
                    foreignField: '_id',
                    as: 'brand_id',
                    pipeline: [{
                        $project: { id: 1, name: 1 },
                    }],
                },
            },
            {
                $unwind: '$brand_id' // Unwind the 'brand_id' array
            },
            {
                $lookup: {
                    from: 'cataroies',
                    localField: 'category_id',
                    foreignField: '_id',
                    as: 'category_id',
                    pipeline: [{
                        $project: { id: 1, category_name: 1 }
                    }]
                }
            },
            {
                $unwind: '$category_id' // Unwind the 'category_id' array
            },
            // vehicle_model_colors 
            {
                $lookup: {
                    from: 'vehicle_model_colors',
                    localField: '_id',
                    foreignField: 'vehicle_information_id',
                    as: 'modelColor',
                }
            },
            // vehicle_price_variant 
            {
                $lookup: {
                    from: 'vehicle_price_variants',
                    localField: '_id',
                    foreignField: 'vehicle_information_id',
                    as: 'priceVariant',
                }
            },
            // vehicle_price_variant 
            {
                $lookup: {
                    from: 'variant_key_specs',
                    localField: '_id',
                    foreignField: 'vehicle_information_id',
                    as: 'keySpec',
                }
            }
        ])
        const mongooseData = postData[0]

        if (mongooseData) {
            try {
                const findIsExistOrNot = await VehicleInformationTable.findOne({ where: { id: mongooseData.php_id } })
                if (findIsExistOrNot) {
                    console.log(mongooseData.php_id)
                    await VehicleInformationTable.update({
                        model_name: mongooseData.model_name,
                        fuel_type: mongooseData.fuel_type,
                        avg_rating: mongooseData.avg_rating,
                        variant_name: mongooseData.variant_name,
                        price_range: mongooseData.price_range,
                        highlights_desc: mongooseData.highlights_desc,
                        price_desc: mongooseData.price_desc,
                        key_specs: mongooseData.key_specs,
                        manufacturer_desc: mongooseData.manufacturer_desc,
                        min_price: Number(mongooseData.min_price),
                        max_price: Number(mongooseData.max_price),
                    },
                        { where: { id: mongooseData.php_id } })
                } else {
                    // console.log("else findIsExistOrNot")
                    const createData = await VehicleInformationTable.create({
                        id: mongooseData.php_id,
                        brand_id: mongooseData.brand_id.id,
                        category_id: mongooseData.category_php_id,
                        bodytype_id: mongooseData.php_bodytype_id,
                        bind_id: mongooseData?.bind_id || 0,
                        model_name: mongooseData.model_name,
                        fuel_type: mongooseData.fuel_type,
                        avg_rating: mongooseData.avg_rating,
                        review_count: mongooseData.review_count,
                        variant_name: mongooseData.variant_name,
                        min_price: Number(mongooseData.min_price),
                        max_price: Number(mongooseData.max_price),
                        price_range: mongooseData.price_range,
                        search_count: mongooseData?.search_count || 0,
                        popular_count: mongooseData?.popular_count || 0,
                        status: mongooseData.status,
                        is_content_writer: mongooseData.is_content_writer,
                        is_designer: mongooseData.is_designer,
                        on_road_price: Number(mongooseData.on_road_price),
                        is_popular_search: mongooseData.is_popular_search,
                        is_upcoming: mongooseData.is_upcoming,
                        is_latest: mongooseData.is_latest,
                        is_recommended: mongooseData.php_id,
                        highlights_desc: mongooseData.highlights_desc,
                        price_desc: mongooseData.price_desc,
                        key_specs: mongooseData.key_specs,
                        manufacturer_desc: mongooseData.manufacturer_desc,
                        link: mongooseData.link,
                        showroom_price: mongooseData.showroom_price,
                        rto_price: mongooseData.rto_price,
                        insurance_price: mongooseData.insurance_price,
                        other_price: mongooseData.other_price,
                    })
                    if (createData) {
                        console.log("---------createData--------")
                        if ("modelColor" in mongooseData) {
                            for (const item of mongooseData?.modelColor) {
                                await ModelColorTable.create({
                                    id: item.php_id,
                                    vehicle_information_id: item.php_vehicle_information_id,
                                    color_name: item.color_name,
                                    color_code: item.color_code,
                                    image: item.image,
                                    createdAt: item.createdAt,
                                    updatedAt: item.updatedAt,
                                    created_at: item.createdAt,
                                    updated_at: item.updatedAt,
                                })

                            }
                        }
                        if ("priceVariant" in mongooseData) {
                            for (const item of mongooseData?.priceVariant) {
                                await PriceVariantTable.create({
                                    id: item.php_id,
                                    vehicle_information_id: item.php_vehicle_information_id,
                                    name: item.name,
                                    link: item.link,
                                    engine: item.engine,
                                    price_range: item.price_range,
                                    price: item.price,
                                    review_count: item.review_count,
                                    rating: item.rating,
                                    status: item.status,
                                    fuel_type: item.fuel_type,
                                    ex_show_room_rice: item.ex_show_room_rice,
                                    mileage: item.mileage,
                                    rto_price: item.rto_price,
                                    insurance_price: item.insurance_price,
                                    other_price: item.other_price,
                                    on_road_price: item.on_road_price,
                                    latest_update: item.latest_update,
                                    is_scrapping: item.is_scrapping,
                                    launched_at: item.launched_at,
                                    image: item.image,
                                    created_at: item.createdAt,
                                    updated_at: item.updatedAt,
                                    createdAt: item.createdAt,
                                    updatedAt: item.updatedAt,
                                })
                            }
                        }
                        if ("keySpec" in mongooseData) {
                            for (const item of mongooseData.keySpec) {
                                await VariantkeySpec.create({
                                    id: item.php_id,
                                    vehicle_information_id: item.php_vehicle_information_id,
                                    variant_id: item.php_variant_id,
                                    specification_id: item.php_specification_id,
                                    name: item.name,
                                    value: item.value,
                                    is_feature: item.is_feature,
                                    variant_key_id: item.php_variant_key_id,
                                    is_specification: item.is_specification,
                                    is_update: item.is_update,
                                    show_key_feature: item.show_key_feature,
                                    show_overview: item.show_overview,
                                    is_scraping: item.is_scraping,
                                    created_at: item.createdAt,
                                    updated_at: item.updatedAt,
                                    createdAt: item.createdAt,
                                    updatedAt: item.updatedAt,
                                })
                            }
                        }
                    }
                }
                const VarSpec = await VariantSpecification.find({})

                VarSpec.map(async (item) => {
                    const findVarSpec = await VariantSpecificationsTable.findOne({ where: { name: item.name } })
                    if (!findVarSpec) {
                        await VariantSpecificationsTable.create({ name: item.name })
                    }
                })
            } catch (error) {
                return res.json(error.message)
            }
        }
        // const response = await VehicleInformationTable.findAll({})
        res.send(postData)
    } catch (error) {
        console.log(error)
    }
}
