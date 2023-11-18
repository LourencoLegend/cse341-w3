module.exports = (dependencies) => {
    const router = dependencies.router();

    router.get('/', (request, response, next) => {
        response.status(200).send();
    });

    router.get('/:sample_mflix_id', (request, response, next) => {
        response.status(200).send();
    });

    return router;
};