import slugify from "slugify";

export default function slug(name) {
    return slugify(name, { lower: true }).replace(/[^\w\-]+/g, ""); //replaces all if it is not a word or -
}