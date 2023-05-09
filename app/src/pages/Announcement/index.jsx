import React from "react";
import { Link } from "react-router-dom";

const Announcement = () => {
    return (
        <div>
            <h1 className="text-6xl mb-10">New Announcement</h1>

            <div className="form-control">
                <form>
                    <div class="mb-6">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Language</label>
                        <input type="floating_language" id="language" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="English" required />
                    </div>
                    <div className="space-y-2 mb-6">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Want to Teach to</label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="options" className="form-radio text-indigo-600" />
                            <span className="ml-2">Basic Level Students</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center">
                            <input type="radio" name="options" className="form-radio text-indigo-600" />
                            <span className="ml-2">Intermediate Level Students</span>
                        </label>
                        <br />
                        <label className="inline-flex items-center">
                            <input type="radio" name="options" className="form-radio text-indigo-600" />
                            <span className="ml-2">Advanced Level Students</span>
                        </label>
                        <br />
                    </div>
                    <div class="mb-3">
                        <label for="text" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Price  </label>
                        <input type="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10" required />  $
                    </div>
                    <div class="flex items-start mb-6">
                        <label for="remember" class="text-sm font-medium text-gray-900 dark:text-gray-300 mr-2">Negotiable</label>
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What differentiate you from the competition"></textarea>
                    </div>
                    <button type="submit" class="text-white mr-2 bg-secondary hover:bg-primary hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Publish</button>
                    <Link to="/">      
                        <button class="text-white bg-error hover:bg-red-500 hover:scale-105 transition-transform duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Publish</button>
                    </Link>
                </form>
            </div>
            
        </div>

    );
}

export default Announcement;