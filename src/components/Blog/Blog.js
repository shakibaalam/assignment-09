import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mx-4 md:mx-16 px-5 py-5'>
            <div className='p-6 bg-slate-200'>
                <h3 className='text-2xl font-bold my-5'>1.What is Context API?</h3>
                <p>We can pass data components to components by props drlling and it is difficult to mainatin and waste of time that every time pass one to another component.To make easy for passing data Context API helps us to declare in one Parent component and get it another child and within child component without passing props.</p>
            </div>
            <div className='p-6 bg-slate-200'>
                <h3 className='text-2xl font-bold my-5'>2.What is Semantic tag?</h3>
                <p>Semantic means element meaning.Semantic tags are those that can understandable by human and also machine.It helps programmer to write code easily .Such semantic tags are nav, header, article ,footer,main,aside,section,mark, summary etc.</p>
            </div>
            <div className='p-6 bg-slate-200'>
                <h3 className='text-2xl font-bold my-5'>3.Inline-Block vs Inline and Block elements</h3>
                <p>Block elements always creates a new line wherease inline elements does not create a anew line.Rather inline elements start existing line.Ex:nav,div,section etc are block and a,span,img are inline. <br />
                    <br />
                    Inline-Block means inline elements acts as a block elements.</p>
            </div>
        </div>
    );
};

export default Blog;