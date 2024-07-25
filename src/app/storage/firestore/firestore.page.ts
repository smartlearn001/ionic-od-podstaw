import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentData, FirebaseFirestore, QueryDocumentSnapshot } from '@capacitor-firebase/firestore';

const COLLECTION_NAME = "notes";

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.page.html',
  styleUrls: ['./firestore.page.scss'],
})
export class FirestorePage implements OnInit, OnDestroy {
  callbackId!: string;
  data!: Array<QueryDocumentSnapshot<DocumentData>>;

  constructor(private cd: ChangeDetectorRef) { }

  async add(): Promise<void> {
    await FirebaseFirestore.addDocument({
      reference: COLLECTION_NAME,
      data: { 
        name: "Test " + new Date().getTime()
      },
    });
  }

  async update(path: string): Promise<void> {
    await FirebaseFirestore.updateDocument({
      reference: path,
      data: { 
        name: "Test " + new Date().getTime()
      },
    });
  }

  async remove(path: string): Promise<void> {
    await FirebaseFirestore.deleteDocument({
      reference: path
    });
  }

  async refresh(): Promise<void> {
    const { snapshots } = await FirebaseFirestore.getCollection({
      reference: COLLECTION_NAME,
      queryConstraints: [
        {
          type: 'orderBy',
          fieldPath: 'name',
          directionStr: 'desc',
        },
        {
          type: 'limit',
          limit: 10,
        },
      ]
    });

    this.data = snapshots;
  }

  async ngOnInit(): Promise<void> {
    await this.refresh();

    this.callbackId = await FirebaseFirestore.addCollectionSnapshotListener(
      {
        reference: COLLECTION_NAME,
        queryConstraints: [
          {
            type: 'orderBy',
            fieldPath: 'name',
            directionStr: 'desc',
          },
          {
            type: 'limit',
            limit: 10,
          },
        ],
      },
      (event, error) => {
        if (error) {
          console.error(error);
        } else if (event) {
          this.data = event.snapshots;
          this.cd.detectChanges();
        }
      }
    );
  }

  ngOnDestroy(): void {
      FirebaseFirestore.removeSnapshotListener({
        callbackId: this.callbackId
      });
  }
}
