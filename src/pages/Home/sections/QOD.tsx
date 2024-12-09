import Link from 'next/link';
import React from 'react';

interface QuestionOfTheDayProps {
  alpha: {
    questionTitle?: string;
    questionUrl?: string;
  };
  beta: {
    questionTitle?: string;
    questionUrl?: string;
  };
  basics: {
    questionTitle?: string;
    questionUrl?: string;
  };
}

interface QuestionOfTheDayState {}

export default class QOD extends React.Component<
  QuestionOfTheDayProps,
  QuestionOfTheDayState
> {
  constructor(props: QuestionOfTheDayProps) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="relative px-4 md:px-12 lg:px-24 pt-36 pb-24">
          <div className="flex flex-col items-center justify-center text-center w-full mb-12">
            <h1 className="font-semibold text-gray-800 text-3xl md:text-5xl">
              Question Of The Day
            </h1>
            <p className="lg:w-[60%] px-5 my-8 text-lg lg:text-xl">
              Solve these questions and share your answer in our Discord server.
              We discuss these questions daily after 09:00 PM IST in our Discord
              server.
            </p>
          </div>
          <div className="sm:mx-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Card Start */}
            <div className="h-auto w-full">
              <div className="bg-white rounded-md shadow-sm hover:shadow-md zoom p-8">
                <div className="flex items-center">
                  <img className="h-12" src="assets/svg/basic.svg" />
                  <h2 className="text-base f-m-m ml-4 font-semibold">
                    TechHub - Basic
                  </h2>
                </div>
                <p className="text-base f-m-m mt-3">
                  {this.props.basics?.questionTitle ?? 'Could not fetch the question'}
                </p>
                <div className="flex flex-row justify-between mt-8 mx-3 gap-3 uppercase tracking-widest">
                  <Link
                    href={this.props.basics?.questionUrl ?? ''}
                    className="w-max btn btn-border-grad text-brand-700"
                  >
                    Solve
                  </Link>
                  <Link
                    href="/questions#basic-questions"
                    className="w-max btn btn-border-grad text-brand-700"
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
            {/* Card End */}
            {/* Additional cards for Alpha and Beta follow the same pattern */}
          </div>
        </div>
      </>
    );
  }
}
