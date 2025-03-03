import colors from "../../utils/colors"
import { Images } from "../../utils/images"

export const filterMenu = [
    {
        id:0,
        title: "Price",
        selected : true
    },
    {
        id:1,
        title: "Gender",
        selected : false
    },
    {
        id:2,
        title: "Shape & Style",
        selected : false
    },
    {
        id:3,
        title: "Frame Size",
        selected : false
    },
    {
        id:4,
        title: "Brand",
        selected : false
    },
    {
        id:5,
        title: "Frame color",
        selected : false
    },
    {
        id:6,
        title: "Weight",
        selected : false
    },
]

export const priceData = [
    {
        id: 0,
        price: "Rs 1000 - Rs 1500"
    },
    {
        id: 1,
        price: "Rs 1500 - Rs 2000"
    },
    {
        id: 2,
        price: "Rs 2000 - Rs 2500"
    },
    {
        id: 3,
        price: "Rs 2500 - Rs 3000"
    }
]

export const GenderData = [
    {
        id: 0,
        title: "Male"
    },
    {
        id: 1,
        title: "Female"
    },
    {
        id: 2,
        title: "Unisex"
    },
]

export const ShapData = [
    {
        id : 0,
        image : Images.aviatorGlass,
        title : "Aviator"
    },
    {
        id : 1,
        image : Images.catGlass,
        title : "Cate Eye"
    },
    {
        id : 2,
        image : Images.geometricGlass,
        title : "Geometric"
    },
    {
        id : 3,
        image : Images.ovalGlass,
        title : "Oval"
    },
    {
        id : 4,
        image : Images.rectangleGlass,
        title : "Rectangle"
    },
    {
        id : 5,
        image : Images.roundGlass,
        title : "Round"
    },
]

export const FrameSizeData = [
    {
        id: 0,
        title: "Extra Narrow"
    },
    {
        id: 1,
        title: "Narrow"
    },
    {
        id: 2,
        title: "Medium"
    },
    {
        id: 3,
        title: "Wide"
    },
    {
        id: 4,
        title: "Extra Wide"
    },
]

export const FrameBrandData = [
    {
        id: 0,
        title: "Prada"
    },
    {
        id: 1,
        title: "Burbeery"
    },
    {
        id: 2,
        title: "Dolce & gabbana"
    },
    {
        id: 3,
        title: "Tom ford"
    },
    {
        id: 4,
        title: "Gucci"
    },
    {
        id: 5,
        title: "Balenciaga"
    },
    {
        id: 6,
        title: "Gast"
    },
    {
        id: 7,
        title: "Ray ban"
    }
]

export const colorData = [
    {
        id : 0,
        title : "Black",
        color: colors.black2
    },
    {
        id : 1,
        title : "Blue",
        color: colors.blue
    },
    {
        id : 2,
        title : "Green",
        color: colors.green
    },
    {
        id : 3,
        title : "Gray",
        color : colors.gray,
    },
    {
        id : 4,
        title : "Light blue",
        color: colors.lightBlue
    },
    {
        id : 5,
        title : "Red",
        color : colors.red
    },
    {
        id : 6,
        title : "Yellow",
        color : colors.yellow
    }
]

export const weightData = [
    {
        id: 0,
        title: "Feather light"
    },
    {
        id: 1,
        title: "Light"
    },
    {
        id: 2,
        title: "Average"
    },
]