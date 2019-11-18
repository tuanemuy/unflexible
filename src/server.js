import sirv from 'sirv';
import polka from 'polka';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen({
    port: PORT,
    //host: 'dev.childhooooo.design'
    //host: '0.0.0.0'
  }, err => {
		if (err) console.log('error', err);
	});
