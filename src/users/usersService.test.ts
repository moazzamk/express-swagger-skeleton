import { UsersService}  from "./usersService";

describe('Users service', () => {
    const service = new UsersService();

    test('it returns a user by ID', () => {
        const rs = service.get(1);
        expect(rs.id).toEqual(1);
    });

    test('it adds a user', () => {
        const rs = service.create({ name: 'hi', email: 'hi' });
        expect(rs.id).toBeGreaterThan(1);
    });
});
