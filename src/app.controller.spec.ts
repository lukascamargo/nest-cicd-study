import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello NodeBR!');
    });

    it('should sum two numbers', () => {
      const A = 10;
      const B = 10;
      expect(A + B).toBe(20);
    });

    it('should multiply three numbers', () => {
      const A = 5;
      const B = 10;
      const C = 0;
      expect(A * B * C).toBe(0);
    });
  });
});
