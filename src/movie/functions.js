const yargs = require("yargs");
const Movie = require("./model");


exports.createMovie = async (movieObj) => {
  try {  
    console.log(movieObj)
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
}


exports.readMovie = async (movieObj) => {
  try {
    console.log(movieObj);
    const getMovie = await Movie.find(movieObj);
    console.log(getMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (filter, update) => {
  try {
    console.log("U");
    const updateMovie = await Movie.updateOne(filter, update);
    console.log(updateMovie);
  } catch (error) {
    console.log(error);
  }
};


exports.deleteMovie = async (movieObj) => {
  try {
    console.log(movieObj);
    const eraseMovie = await Movie.deleteOne({title:movieObj.title});
    console.log(eraseMovie);
  } catch (error) {
    console.log(error);
  }

};

