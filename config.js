var meliConfig = {

	root_url: 'https://api.mercadolibre.com',
	auth_url: 'https://auth.mercadolibre.com/authorization',
	oauth_url: 'https://api.mercadolibre.com/oauth/token',
	client_id :  process.env.CLIENT_ID,
	secret_key : process.env.CLIENT_SECRET,
	redirect_uri : process.env.REDIRECT_URI,
	site_id : 'MLA'
};

module.exports = {
    meliConfig
}