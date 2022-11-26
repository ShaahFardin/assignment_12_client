import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto mt-10 mb-20'>
            <h1 className='md:text-5xl text-3xl my-5 '>Blogs</h1>
            <div className='text-start '>
                <h1 className='text-3xl mb-2'>What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl'>
                    The Four Kinds of React State to Manage
                    When we talk about state in our applications,
                    it’s important to be clear about what types of state actually matter. <br />

                    There are four main types of state you need to properly manage in your React apps: <br />

                    1.Local state <br />
                    2. Global state<br />
                    3. Server state<br />
                    4. URL state<br />
                </p>
            </div>
            <div className='text-start '>
                <h1 className='md:text-3xl mb-2'>How does prototypical inheritance work?</h1>
                <p className='md:text-xl'>
                    The Prototypal Inheritance is a feature in javascript used to add
                    methods and properties in objects. It is a method by which an object
                    can inherit the properties and methods of another object. Traditionally,
                    in order to get and set the [[Prototype]] of an object, we use Object.
                    getPrototypeOf and Object.
                </p>
            </div>
            <div className='text-start '>
                <h1 className='md:text-3xl mb-2'>What is a unit test? Why should we write unit tests?</h1>
                <p className='md:text-xl'>
                    The main objective of unit testing is to isolate written code to test and determine
                    if it works as intended. Unit testing is an important step in the development process,
                    because if done correctly,
                    it can help detect early flaws in code which may be more difficult to find in later testing stage
                </p>
            </div>
            <div className='text-start '>
                <h1 className='md:text-3xl mb-2'> React vs. Angular vs. Vue?

                </h1>
                <p className='md:text-xl'>
                    fVue provides higher customizability and hence is easier to learn than Angular
                    or React. Further, Vue has an overlap with Angular and React with respect to their functionality
                    like the use of components. Hence, the transition to Vue from either of the two is an easy option
                </p>
            </div>

        </div>
    );
};

export default Blogs;