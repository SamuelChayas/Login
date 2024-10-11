import crypto from 'crypto';

export const generatePassword = async (password) => {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(32).toString('hex');
        crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            resolve({
                salt,
                hash: key.toString('hex')
            });
        });
    });
};

export const validatePassword = async (password, salt, hash) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            const result = key.toString('hex');
            if (result !== hash) reject('JAJAIPAPA');
            resolve({ valid: true });
        });
    });
};