import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Product } from './product.entity'

@Entity({ name: 'subscriptions' })
export class Subscription {
  @PrimaryColumn({ length: 40 })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: true })
  userId: string;

  @Column({ name: 'start_date' })
  startDate: Date;

  @Column({ name: 'expires_date', nullable: true })
  expiresDate: Date;

  @Column({ name: 'is_trial_period' })
  isTrial: boolean;

  @Column({ name: 'auto_renew_status' })
  autoRenewStatus: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @Column({ name: 'revocation_date', nullable: true })
  revocationDate: Date;

  @Column({ name: 'revocation_reason', nullable: true })
  revocationReason: string;
}
